//Required at least on test in order for pipeline to work

import { expect } from "vitest";

const project = {
    name: "CineMatch",
    inDevelopment: true,
};

test("CineMatch is in development", () => {
    expect(project.name).toBe("CineMatch");
    expect(project.inDevelopment).toBe(true);
});