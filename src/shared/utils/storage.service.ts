export function getThemeMode() {
    return localStorage.getItem('themeMode');
}

export function setThemeMode(value: any) {
    return localStorage.setItem('themeMode', String(value));
}
