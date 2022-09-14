export namespace Helper {

  export function getBaseUrl(): string {
    return `${window.location.protocol}//${window.location.host}`;
  }

  export function shuffleArray(data: any[]): any[] {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

  export function getAPIDate(): string {
    const date = new Date();
    return date.toISOString();
  }

  export function isDevelopment(): boolean {
    return process.env.VUE_APP_ENV_TYPE === "development";
  }

  export function isIOS(): boolean {
    const regex = /iPhone|iPad|iPod/i;
    return regex.test(navigator.userAgent);
  }

}