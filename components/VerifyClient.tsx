"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  HiCheckCircle,
  HiExclamation,
  HiEye,
  HiShieldCheck,
  HiXCircle,
} from "react-icons/hi";
import {
  describeVerifyStatus,
  extractVerificationCode,
  lookupRecord,
  recordView,
  type RecordVerifyStatus,
  type StoredRecord,
} from "@/lib/verify";

function StatusBanner({ status }: { status: RecordVerifyStatus }) {
  const ok = status === "valid";
  const Icon = ok
    ? HiCheckCircle
    : status === "revoked" || status === "expired"
      ? HiExclamation
      : HiXCircle;
  const styles = ok
    ? "border-dark-primary/40 bg-dark-primary/10 text-dark-primary-bright"
    : status === "revoked" || status === "expired"
      ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-200"
      : "border-red-400/40 bg-red-500/10 text-red-200";

  return (
    <div className={`rounded-2xl border px-4 py-3 flex items-start gap-3 ${styles}`}>
      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold capitalize">{status.replace("_", " ")}</p>
        <p className="text-sm mt-0.5 opacity-90">{describeVerifyStatus(status)}</p>
      </div>
    </div>
  );
}

function formatIssued(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function VerifyClient({
  initialCode = "",
}: {
  initialCode?: string;
}) {
  const [input, setInput] = useState(initialCode);
  const [status, setStatus] = useState<RecordVerifyStatus | null>(null);
  const [record, setRecord] = useState<StoredRecord | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [checking, setChecking] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!initialCode) return;
    const code = extractVerificationCode(initialCode);
    if (!code) {
      setStatus("invalid");
      setRecord(null);
      setInput(initialCode);
      return;
    }
    setInput(code);
    const result = lookupRecord(code);
    setStatus(result.status);
    setRecord(result.record);
  }, [initialCode]);

  function runVerify(raw: string) {
    setChecking(true);
    setShowDetails(false);
    const result = lookupRecord(raw);
    setStatus(result.status);
    setRecord(result.record);
    if (result.status === "valid" && result.record) {
      recordView(result.record.code || result.record.hash);
      setNotice("NexHub Record is valid and not tampered with.");
    } else {
      setNotice(describeVerifyStatus(result.status));
    }
    window.setTimeout(() => setNotice(null), 3500);
    setChecking(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    runVerify(input);
  }

  const detectedCode = useMemo(() => extractVerificationCode(input), [input]);

  return (
    <main className="min-h-screen bg-dark-bg px-6 pb-16 pt-28">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-dark-primary/15 text-dark-primary-bright">
            <HiShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-dark-text">
            Verify a NexHub Record
          </h1>
          <p className="text-sm text-dark-text-secondary">
            Paste a record code or helper link. Official confirmation is only
            trusted on nexhub.africa.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-dark-card-alt bg-dark-card p-5"
        >
          <div>
            <label
              htmlFor="verify-input"
              className="mb-1 block text-sm font-medium text-dark-text-secondary"
            >
              Record code or link
            </label>
            <input
              id="verify-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="NH-7K2M9Q or https://nexhub.africa/verify/NH-7K2M9Q"
              className="w-full rounded-xl border border-dark-card-alt bg-dark-bg px-3 py-2.5 font-mono text-sm text-dark-text outline-none ring-dark-primary/40 focus:ring-2"
            />
            {detectedCode && (
              <p className="mt-1 text-xs text-dark-text-secondary">
                Detected code:{" "}
                <span className="font-mono font-medium text-dark-text">
                  {detectedCode}
                </span>
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={checking || !input.trim()}
            className="flex w-full items-center justify-center rounded-full bg-dark-primary px-4 py-2.5 text-sm font-semibold text-dark-bg transition-colors hover:bg-dark-primary-bright disabled:cursor-not-allowed disabled:opacity-50"
          >
            {checking ? "Verifying…" : "Verify"}
          </button>
        </form>

        {notice && (
          <div className="rounded-2xl border border-dark-card-alt bg-dark-card px-4 py-3 text-sm text-dark-text">
            {notice}
          </div>
        )}

        {status && <StatusBanner status={status} />}

        {status === "valid" && record && (
          <div className="space-y-3">
            {!showDetails ? (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-dark-primary/40 px-4 py-2.5 text-sm font-semibold text-dark-text hover:border-dark-primary-bright"
              >
                <HiEye className="h-4 w-4" />
                View Record
              </button>
            ) : (
              <article className="rounded-2xl border border-dark-card-alt bg-dark-card p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
                  Verified by NexHub
                </p>
                <h2 className="mt-3 text-xl font-semibold text-dark-text">
                  {record.studentName}
                </h2>
                <p className="mt-1 text-sm text-dark-text-secondary">
                  {record.purpose}
                </p>
                <p className="mt-4 text-sm text-dark-text-secondary">
                  Issued {formatIssued(record.generatedAt)}
                </p>
                <p className="mt-4 font-mono text-sm tracking-wide text-dark-text">
                  {record.code || record.hash}
                </p>
              </article>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
