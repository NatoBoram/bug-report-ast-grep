import { test } from "vitest"
import { lang } from "./verbatim_module_syntax.ts"

test("verbatimModuleSyntax", ({ expect }) => {
	expect(lang).toBe("TypeScript")
})
