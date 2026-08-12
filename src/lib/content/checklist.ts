export type ChecklistItem = {
  id: string;
  check: string;
  question: string;
  failMeans: string;
};

export type ChecklistSection = {
  slug: string;
  title: string;
  subtitle: string;
  items: ChecklistItem[];
};

export const trustCalibrationChecklist: ChecklistSection = {
  slug: "trust-calibration",
  title: "Trust-Calibration Checklist",
  subtitle: "Run before accepting any AI-generated output as a root cause",
  items: [
    {
      id: "source-grounding",
      check: "Source-grounding check",
      question: "Does the claim trace back to specific evidence — a ticket, a timestamp, a metric, a change log entry?",
      failMeans: "This is an assertion, not a finding. Ask 'what evidence supports this?' before it goes any further.",
    },
    {
      id: "alternative-hypothesis",
      check: "Alternative-hypothesis check",
      question: "Were other explanations genuinely considered and ruled out — with evidence — or is this the only theory that was ever discussed?",
      failMeans: "A single-hypothesis lock-in with nothing else considered is a red flag on its own, independent of whether this hypothesis is right.",
    },
    {
      id: "blast-radius",
      check: "Blast-radius-of-being-wrong check",
      question: "If we act on this and it's wrong, what does it cost us — a wasted hour, a bad customer update, a compliance exposure?",
      failMeans: "The higher the cost of being wrong, the more the first two checks deserve scrutiny before sign-off — this check sets how hard to look, not whether to look.",
    },
  ],
};

export const dataHandlingChecklist: ChecklistSection = {
  slug: "data-handling",
  title: "Data-Handling Guardrails",
  subtitle: "Run before any production log or customer data reaches an AI tool",
  items: [
    {
      id: "pii-sanitized",
      check: "PII sanitization",
      question: "Have names, emails, account IDs, session tokens, and credentials been redacted from this data before it's pasted anywhere?",
      failMeans: "Stop. This needs sanitization before it goes into any AI tool, approved or not.",
    },
    {
      id: "approved-tool",
      check: "Approved-tool check",
      question: "Is the specific tool being used — not just the model family — covered by your organization's data-handling agreement?",
      failMeans: "A consumer-grade version of an otherwise-approved model may carry none of the same data protections. Confirm with IT/security, don't assume.",
    },
    {
      id: "incident-category",
      check: "Incident-category check",
      question: "Is this a security incident, compliance-sensitive RCA, or low-evidence/high-stakes scenario requiring named human sign-off before AI-assisted conclusions are used?",
      failMeans: "These categories need a named human sign-off in advance, not a judgment call made live under pressure.",
    },
  ],
};

export const communicationChecklist: ChecklistSection = {
  slug: "communication-review",
  title: "Incident Communication Review Pass",
  subtitle: "Run before any AI-drafted update goes to an executive or customer",
  items: [
    {
      id: "accuracy",
      check: "Accuracy against evidence",
      question: "Does every claim in the draft trace back to something confirmed, not just something plausible?",
      failMeans: "An unconfirmed claim in customer- or executive-facing language is an overpromise waiting to happen.",
    },
    {
      id: "hedging",
      check: "Appropriate hedging",
      question: "Does the confidence level in the language match the team's actual confidence — not the model's default fluent tone?",
      failMeans: "Watch for 'resolved' when the team only has 'likely resolved.' Round down to what's actually known, never up.",
    },
    {
      id: "audience-fit",
      check: "Audience fit",
      question: "Would this land correctly for the specific person or group about to read it — translated, not just simplified?",
      failMeans: "A technically accurate draft written for engineers can still be the wrong translation for an executive or a customer.",
    },
  ],
};

export const allChecklists = [trustCalibrationChecklist, dataHandlingChecklist, communicationChecklist];
