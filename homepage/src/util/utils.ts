export function GoToTop(position: number): void {
    window.scrollTo({ top: position, behavior: "smooth" });
}
