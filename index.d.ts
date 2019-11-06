/// <reference types="node"/>

declare namespace loading {
  interface Options {
    text?: string;
    color?: string;
    interval?: number;
    stream?: NodeJS.WritableStream;
    frames?: string[];
  }
  interface Loading {
		/**
		 * Change the text after the spinner.
		 */
    text: string;
		/**
		 * Change the spinner color.
		 */
		color: string;
    /**
     * Start the spinner.
     * @param text - Set the current text.
     */
    start(text?: string): Loading;
    /**
     * Stop and clear the spinner.
     * @returns The spinner instance.
     */
    stop(): Loading;
    /**
     * Clear the spinner.
     * @returns The spinner instance.
     */
    clear(): Loading;
    /**
     * Stop the spinner, change it to a green `✔` and persist the current text, or `text` if provided.
     * @param text - Will persist text if provided.
     * @returns The spinner instance.
     */
    succeed(text?: string): Loading;

		/**
		 * Stop the spinner, change it to a red `✖` and persist the current text, or `text` if provided.
		 * @param text - Will persist text if provided.
		 * @returns The spinner instance.
		 */
    fail(text?: string): Loading;
		/**
	   * Stop the spinner, change it to a yellow `⚠` and persist the current text, or `text` if provided.
	   * @param text - Will persist text if provided.
	   * @returns The spinner instance.
	   */
    warn(text?: string): Loading;

		/**
		 * Stop the spinner, change it to a blue `ℹ` and persist the current text, or `text` if provided.
		 * @param text - Will persist text if provided.
		 * @returns The spinner instance.
		 */
    info(text?: string): Loading;

		/**
		 * Manually render a new frame.
		 * @returns The spinner instance.
		 */
    render(): Loading;
		/**
		 * Get a new frame.
		 * @returns The spinner instance text.
		 */
		frame(): string;
  }
}

declare const loading: {
	(options?: loading.Options | string): loading.Loading;
}


export = loading;
