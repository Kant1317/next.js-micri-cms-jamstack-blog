import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "blog-isaina",
    apiKey: process.env.API_KEY,
})