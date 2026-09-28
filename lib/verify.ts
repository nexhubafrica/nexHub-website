const STORAGE_KEY = "nexhub-verification-records";
const LEGACY_STORAGE_KEY = "nexhub-verification-credentials";

export type RecordVerifyStatus =
  | "valid"
  | "revoked"
  | "expired"
  | "not_found"
  | "invalid";

export interface StoredRecord {
  studentName: string;
  purpose: string;
  generatedAt: string;
  code: string;
  hash: string;
  isActive: boolean;
  revokedAt?: string;
  expiresAt?: string;
  viewCount: number;
  lastViewedAt?: string;
}

export function extractVerificationCode(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;

  const fromUrl = raw.match(/\/verify\/([A-Za-z0-9-]+)/i);
  const candidate = (fromUrl?.[1] ?? raw).trim().toUpperCase();

  const normalized = candidate.startsWith("NH-")
    ? candidate
    : candidate.startsWith("NH")
      ? `NH-${candidate.slice(2).replace(/^-+/, "")}`
      : candidate.includes("-")
        ? candidate
        : `NH-${candidate}`;

  if (!/^NH-[A-Z0-9]{4,12}$/.test(normalized)) return null;
  return normalized;
}

export function describeVerifyStatus(status: RecordVerifyStatus): string {
  switch (status) {
    case "valid":
      return "This NexHub Record is valid and has not been altered.";
    case "revoked":
      return "This NexHub Record was revoked and is no longer valid.";
    case "expired":
      return "This NexHub Record has expired.";
    case "invalid":
      return "This code or link is not a valid NexHub Record.";
    case "not_found":
    default:
      return "No NexHub Record was found for this code.";
  }
}

function revive(raw: StoredRecord): StoredRecord {
  return {
    ...raw,
    code: raw.code || raw.hash,
    hash: raw.hash || raw.code,
    viewCount: raw.viewCount ?? 0,
  };
}

export function loadStoredRecords(): StoredRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredRecord[];
    return Array.isArray(parsed) ? parsed.map(revive) : [];
  } catch {
    return [];
  }
}

export function lookupRecord(input: string): {
  status: RecordVerifyStatus;
  record: StoredRecord | null;
} {
  const code = extractVerificationCode(input);
  if (!code) return { status: "invalid", record: null };

  const record = loadStoredRecords().find(
    (item) => (item.code || item.hash).toUpperCase() === code
  );
  if (!record) return { status: "not_found", record: null };
  if (record.revokedAt || !record.isActive) {
    return { status: "revoked", record };
  }
  if (record.expiresAt && new Date(record.expiresAt).getTime() < Date.now()) {
    return { status: "expired", record };
  }
  return { status: "valid", record };
}

export function recordView(code: string) {
  const normalized = extractVerificationCode(code);
  if (!normalized || typeof window === "undefined") return;
  const records = loadStoredRecords().map((record) =>
    (record.code || record.hash).toUpperCase() === normalized
      ? {
          ...record,
          viewCount: record.viewCount + 1,
          lastViewedAt: new Date().toISOString(),
        }
      : record
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}
