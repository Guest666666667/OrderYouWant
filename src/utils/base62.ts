const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const base = 62;

/**
 * Converts between base 10 and base 62.
 * @param input The input string.
 * @param isDecimal If true, converts from base 10 to base 62; otherwise, base 62 to base 10.
 * @returns The converted string.
 */
export function convertBase62(input: string, isDecimal: boolean): string {
    if (isDecimal) {
        // Add a leading "1" to ensure the first digit exists
        let num = BigInt("1" + input);

        let result = "";
        while (num > 0) {
            const remainder = Number(num % BigInt(base));
            result = chars[remainder] + result;
            num = num / BigInt(base);
        }
        return result;
    } else {
        let num = BigInt(0);
        for (let i = 0; i < input.length; i++) {
            const value = chars.indexOf(input[i]);
            if (value === -1) {
                throw new Error(`Invalid character '${input[i]}' in base62 string`);
            }
            num = num * BigInt(base) + BigInt(value);
        }

        // Convert back to string and remove the leading "1"
        return num.toString().slice(1);
    }
}
