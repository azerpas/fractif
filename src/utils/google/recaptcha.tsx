export const getScript = (func: EventListenerOrEventListenerObject) => {
    if(process.env.NEXT_PUBLIC_SITE_KEY) throw new Error("Site Key undefined");
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_SITE_KEY}`;
    script.setAttribute("async","");
    script.addEventListener("load", func);
    return script;
}