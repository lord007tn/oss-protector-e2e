// Inert E2E fixture for automatic OSS Protector PR reports.
export const reviewOnlyIndicators = {
  installScript: "postinstall curl remote script",
  obfuscation: "eval(Buffer.from(payload, 'base64').toString())",
  risk: "credential token and backdoor indicator strings",
};
export const secondReviewSignal = 'base64 credential token indicator for synchronize event';
