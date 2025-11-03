import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, FileDown, ExternalLink, Brain, Cloud, Boxes, Sparkles, BrickWall, Backpack } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { BsFront } from "react-icons/bs";

// ===
// Portfolio Template — single-file React component
// Tech: TailwindCSS, shadcn/ui, framer-motion, lucide-react
// Tagline provided by user. Includes space for 4 projects we'll fill in later.
// ===

export default function Portfolio() {
  const [year] = useState(new Date().getFullYear());

  const projects = [
    {
      id: "p1",
      title: "Airline Passenger Pulse",
      blurb:
        "Model dissatisfaction as “at-risk” customers; build end-to-end pipeline (EDA → features → LightGBM/XGBoost → AUC/PR) with SHAP, counterfactuals, and a mini dashboard of “preventive actions” by segment.",
      tags: ["Tabular ML", "Class Imbalance", "Explainability", "Streamlit/FastAPI"],
      status: "Explore on GitHub",
      link: "https://github.com/smakde/Airline-Passenger-Pulse",
      img: "/images/Airlines.png?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p2",
      title: "NLP Ticket Triage & Sentiment",
      blurb:
        "Compact transformer to auto-label help-desk tickets (sentiment + topic), with FastAPI endpoint and eval dashboard.",
      tags: ["Transformers", "Text Classification", "FastAPI", "MLOps"],
      status: "Coming soon",
      link: "#",
      img: "/images/NLP.png?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p3",
      title: "Learning-Resource Recommender",
      blurb:
        "Hybrid implicit-feedback + content (ALS/LightFM) with a tiny Streamlit app to browse top-N recs and explanations.",
      tags: ["Recommenders", "Vectorization", "Eval@K", "Streamlit"],
      status: "Coming soon",
      link: "#",
      img: "/images/Learning.png?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p4",
      title: "Edge Vision: On-device CV Pipeline",
      blurb:
        "SymPy + NumPy engine that solves probability/combinatorics/calculus snippets, shows steps, and verifies via Monte Carlo.",
      tags: ["SymPy", "NumPy", "Simulation", "CLI/Web UI"],
      status: "Coming soon",
      link: "#",
      img: "/images/Math.png?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Shreyas Makde</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a target="_blank" href="#work" className="hover:text-emerald-300 transition">Work</a>
            {/* <a target="_blank" href="#skills" className="hover:text-emerald-300 transition">Skills</a> */}
            <a target="_blank" href="#about" className="hover:text-emerald-300 transition">About</a>
            <a target="_blank" href="#contact" className="hover:text-emerald-300 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
              <a target="_blank" href="mailto:shreyas.makde.dev@gmail.com"><Mail className="mr-2 h-4 w-4"/>Get in touch</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Profile avatar - using provided GitHub avatar URL */}
            <div className="mb-6">
              <Avatar
                src="https://avatars.githubusercontent.com/u/209976736?v=4"
                alt="Shreyas Makde"
                className="h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 rounded-full border-2 border-white/10 object-cover shadow-lg"
                initials="SM"
              />
            </div>
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-400/30">Shreyas Bhupesh Makde: Sr. Software Engineer : AI/ML</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              I engineer and envision data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300">production-ready intelligence.</span>
              <div className="text-slate-200 text-2xl md:text-3xl pt-5">Combining software craftsmanship with machine learning.</div>
            </h1>

            <p className="mt-6 text-slate-300/90 max-w-xl">
              I build intelligent, cloud-native systems end to end: data pipelines, training, deployment, and monitoring.
              Strong in .NET/C#, Python, AWS, Kafka, Kubernetes, and modern MLOps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                <a target="_blank" href="https://github.com/smakde"><Brain className="mr-2 h-4 w-4"/>See my work</a>
              </Button>
              {/* <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                <a target="_blank" href="#skills"><Boxes className="mr-2 h-4 w-4"/>Skills</a>
              </Button> */}
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                <a target="_blank" href="/Shreyas_Makde_Resume.pdf" download><FileDown className="mr-2 h-4 w-4"/>Resume</a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a target="_blank" href="https://github.com/smakde" className="inline-flex items-center gap-2 hover:text-emerald-300" aria-label="GitHub">
                <Github className="h-5 w-5"/>
                <span className="text-sm">GitHub</span>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/shrey1" className="inline-flex items-center gap-2 hover:text-emerald-300" aria-label="LinkedIn">
                <SiLinkedin className="h-5 w-5"/>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a target="_blank" href="mailto:shreyas.makde.dev@gmail.com" className="inline-flex items-center gap-2 hover:text-emerald-300" aria-label="LinkedIn">
                <Mail className="h-4 w-4"/>
                <span className="text-sm">shreyas.makde.dev@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl blur"></div>
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
                <div className="grid grid-cols-1 gap-3">
                  <Stat icon={<Brain className="h-4 w-8"/>} label="ML/AI" value="Generative AI, Scikit-learn,
Pandas, NumPy, Data-driven, XGBoost, Kaggle,
Optimization, Vector Search" />
                  <Stat icon={<Cloud className="h-4 w-8"/>} label="Cloud" value="AWS (S3, EC2, Lambda, RDS, Bedrock), Azure
DevOps, CloudFormation, Linux Integrations,
Cloud Security" />
                </div>
                 <div className="grid grid-cols-1 gap-3 pt-5">
                  <Stat icon={<BrickWall className="h-4 w-8"/>} label="DevOps/MLOps" value="AWS Bedrock, Docker, Kubernetes, GitHub Actions,
CI/CD, Release Pipelines, Datadog, ELK Stack, Webpack" />
                  <Stat icon={<Boxes className="h-4 w-8"/>} label="Project Methodologies" value="Agile-Scrum, JIRA, Monday.COM, Azure, Release Management, ServiceNow,
Performance Optimization" />
                </div>
                <div className="grid grid-cols-1 gap-3 pt-5">
                  <Stat icon={<Backpack className="h-4 w-8"/>} label="Backend" value="Python, C# .NET, Node.js, .NET Core,
 REST APIs, SQL Server,
PostgreSQL, Micro-services,
Data Pipelines" />
                  <Stat icon={<BsFront className="h-4 w-8"/>} label="Frontend" value=" React, Angular, Vue.js, Vite, React Native,
TypeScript, JavaScript (ES6+), Ember.js, Bootstrap,
TailwindCSS" />
                </div>
                <div className="mt-5 text-xs text-slate-400">
                  Built with performance and reliability in mind; latency budgets, cost control, and observability baked in.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          </div>
          {/* <a target="_blank" href="#contact" className="text-sm text-emerald-300 hover:underline">Want one tailored to your stack?</a> */}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.id} className="overflow-hidden bg-white/5 border-white/10 hover:border-emerald-300/30 transition">
              <div className="aspect-video w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover object-center"/>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <Badge className="bg-green-500/20 text-white-200 border-green-400/30">{p.status}</Badge>
                </CardTitle>
                <CardDescription className="text-slate-300/80">
                  {p.blurb}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-white/10 border-white/10 text-slate-200">{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-xs text-slate-400">Click on details for GitHub resources for this project</div>
                <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10" asChild>
                  <a target="_blank" href={p.link} aria-disabled>
                    <ExternalLink className="mr-2 h-4 w-4"/>Details
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills
      <section id="skills" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills Snapshot</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard title="ML & Data" items={["LLMs (RAG, finetuning)", "Recsys", "Imbalanced learning", "CV", "Feature Stores", "Experimentation"]} />
          <SkillCard title="Software & Cloud" items={[".NET/C#, Python", "AWS (ECS, Lambda, S3, SQS)", "Docker, Kubernetes", "gRPC/REST", "Kafka, Redis", "CI/CD, IaC"]} />
          <SkillCard title="MLOps & Ops" items={["Model registry", "Observability (OpenTelemetry)", "Data/Concept Drift", "Latency & Cost Budgets", "A/B & Shadow deploys", "Governance"]} />
        </div>
      </section> */}

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-3xl blur"></div>
              <img
                src="/images/Senior.jpeg?q=80&w=1200&auto=format&fit=crop"
                alt="Workstation"
                className="relative rounded-3xl border border-white/10"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
            <p className="text-slate-300/90 leading-relaxed">
              Recently promoted Senior Software Engineer with 11 yrs in distributed systems, C# .NET, Python, Node.js frameworks and AWS.
Skilled in troubleshooting, process optimization, and data-driven solutions that improve safety, efficiency, and
reliability. Experienced in cross-functional collaboration, delivering quality solutions in complex environments.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300/90 list-disc list-inside">
              <li>Led cloud modernizations (.NET Core + Vue), cutting API latency ~80% and improving reliability.</li>
              <li>Built CI/CD with GitHub Actions/Azure Pipelines; reduced build/test times across multiple teams.</li>
              <li>Designed streaming + batch data pipelines; idempotent consumers, and schema versioning</li>
              <li>Strong SQL (T-SQL/Postgres): indexing, query tuning, and data modeling for analytics at scale.</li>
              <li>Observability-first: Datadog/ELK tracing, SLOs, on-call playbooks, and production runbooks.</li>
              <li>ML-in-prod: SageMaker/Lambda inference, feature stores, vector search, and guardrails.</li>
              <li>API design at scale: REST/gRPC contracts, pagination, backward compatibility, authz/entitlements.</li>
              <li>Security & compliance: IAM least privilege, secrets management, PII handling, and audit logging.</li>
              <li>Cost/perf on AWS: right-sizing, caching (Redis), and storage/network optimizations.</li>
              <li>Mentored engineers, led TFS→Git migration across 9+ repos and cross-team delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* <section id="contact" className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something</h2>
          <p className="mt-2 text-slate-300/90 max-w-2xl">
            Interested in my work or want to collaborate? Drop a note and I’ll get back soon. You can also reach me on
            LinkedIn.
          </p>

          <form className="mt-6 grid md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-emerald-300/40" placeholder="Your name" />
            <input className="md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-emerald-300/40" placeholder="Email" type="email" />
            <input className="md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:border-emerald-300/40" placeholder="Company (optional)" />
            <textarea className="md:col-span-3 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 h-28 outline-none focus:border-emerald-300/40" placeholder="Message" />
            <div className="md:col-span-3">
              <Button className="bg-emerald-500 hover:bg-emerald-400"><Mail className="mr-2 h-4 w-4"/>Send</Button>
            </div>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {year} Shreyas Makde: All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a target="_blank" href="mailto:shreyas.makde.dev@gmail.com" className="hover:text-emerald-300 inline-flex items-center gap-1"><Mail className="h-4 w-4"/>shreyas.makde.dev@gmail.com</a>
            <a target="_blank" href="https://github.com/smakde" className="hover:text-emerald-300 inline-flex items-center gap-1"><Github className="h-4 w-4"/>GitHub</a>
            <a target="_blank" href="https://www.linkedin.com/in/shrey1" className="hover:text-emerald-300 inline-flex items-center gap-1"><SiLinkedin className="h-4 w-4"/>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ——— Helpers ———
function Avatar({ src, alt, className, initials = "SM" }: { src?: string; alt?: string; className?: string; initials?: string }) {
  const [errored, setErrored] = useState(false);

  // If image missing or fails to load, show initials fallback
  if (!src || errored) {
    return (
      <div role="img" aria-label={alt} className={`inline-flex items-center justify-center bg-emerald-500/10 text-emerald-300 ${className}`}>
        <span className="text-lg font-semibold">{initials}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setErrored(true)} />;
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
      <div className="flex items-center gap-2 text-slate-200">
        <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-400/30 to-cyan-400/30">
          {icon}
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
}

// function SkillCard({ title, items }: { title: string; items: string[] }) {
//   return (
//     <Card className="bg-white/5 border-white/10">
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription className="text-slate-300/80">What I use in production</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-2 list-disc list-inside text-slate-200">
//           {items.map((i) => (
//             <li key={i}>{i}</li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// }
