export const normalizeBrazilWhatsappDigits = (value: string) => {
  const raw = value.replace(/\D/g, "");
  const withoutPrefix = raw.startsWith("55") ? raw.slice(2) : raw;
  const local = withoutPrefix.slice(0, 11);
  return `55${local}`;
};

export const formatBrazilWhatsappInput = (value: string) => {
  const digits = normalizeBrazilWhatsappDigits(value);
  const local = digits.slice(2);

  if (!local.length) return "55";
  if (local.length <= 2) return `55 (${local}`;
  if (local.length <= 6) return `55 (${local.slice(0, 2)}) ${local.slice(2)}`;
  if (local.length <= 10) {
    return `55 (${local.slice(0, 2)}) ${local.slice(2, 6)}-${local.slice(6)}`;
  }
  return `55 (${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`;
};

export const formatBrazilWhatsappDisplay = (value: string) => {
  const digits = normalizeBrazilWhatsappDigits(value);
  const local = digits.slice(2);

  if (local.length <= 10) {
    return `+55 (${local.slice(0, 2)}) ${local.slice(2, 6)}-${local.slice(6)}`.trim();
  }
  return `+55 (${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`.trim();
};
