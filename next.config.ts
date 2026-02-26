import type { NextConfig } from "next";

const nextConfig: NextConfig = {
env:{
OPEN_AI_KEY:process.env.OPEN_AI_KEY
}
};

export default nextConfig;
