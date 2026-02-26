export const isCapsLockEnabled = (event: unknown): boolean => {
  if (!event || typeof event !== "object") {
    return false;
  }

  const eventWithModifier = event as { getModifierState?: (_key: string) => boolean };
  if (typeof eventWithModifier.getModifierState !== "function") {
    return false;
  }

  return eventWithModifier.getModifierState("CapsLock");
};
