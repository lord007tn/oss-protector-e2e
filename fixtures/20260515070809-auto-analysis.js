// Inert E2E fixture for OSS Protector automatic PR analysis.
// The strings below are intentionally not executed; they simulate suspicious code patterns.
export const suspiciousPatterns = [
  "postinstall curl remote script",
  "eval(Buffer.from(payload, 'base64').toString())",
  "credential token exfiltration indicator",
  "backdoor persistence indicator",
];