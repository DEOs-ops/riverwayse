import Link from "next/link";
import Reveal from "@/components/Reveal";
import Atmosphere from "@/components/Atmosphere";
import PhotoHero from "@/components/PhotoHero";
import { COURSES } from "../data";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const course = COURSES.find((c) => c.slug === params.slug);
  return { title: course ? `${course.name} — Riverways Courses` : "Course — Riverways" };
}

export default function CourseDetailPage({ params }) {
  const course = COURSES.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <section className="section">
        <div className="container">
          <h1>Course not found</h1>
          <Link href="/courses" className="btn btn-ghost" style={{ marginTop: 20 }}>
            Back to all courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section course-detail-hero" style={{ position: "relative", overflow: "hidden" }}>
        <PhotoHero src="/photos/forest-sunbeams.jpg" position="center 60%" />
        <Atmosphere monumentalWord="courses" showMonumentalType={false} particleCount={35} showBg={false} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <p className="eyebrow">
              {course.n} · {course.duration}
            </p>
            <h1>{course.name}</h1>
            <p className="course-detail-lede">{course.desc}</p>
          </Reveal>
        </div>
      </section>

      <section className="section course-detail-body">
        <div className="container course-detail-grid">
          <Reveal>
            <h2>Who it's for</h2>
            <p>{course.whoFor}</p>
          </Reveal>
          <Reveal>
            <h2>What you'll cover</h2>
            <ol className="curriculum-list">
              {course.curriculum.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <h2>Outcome</h2>
            <p>{course.outcome}</p>
          </Reveal>
        </div>
      </section>

      <section className="section course-detail-cta">
        <div className="container course-detail-cta-inner">
          <Reveal>
            <h2>Dates and enrolment are being finalised.</h2>
            <p>Leave your details and you'll be first to know when registration opens.</p>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn-primary">
              Get notified
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/courses" className="btn btn-ghost">
              ← Back to all courses
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .course-detail-hero h1 {
          margin-top: 12px;
          font-size: clamp(32px, 5vw, 52px);
          max-width: 18ch;
        }
        .course-detail-lede {
          margin-top: 20px;
          max-width: 620px;
          color: var(--ink-300);
          font-size: 17px;
          line-height: 1.6;
        }
        .course-detail-grid {
          display: grid;
          gap: 40px;
          max-width: 720px;
        }
        .course-detail-grid h2 {
          font-size: 22px;
          margin-bottom: 12px;
        }
        .course-detail-grid p {
          color: var(--ink-300);
          font-size: 15px;
          line-height: 1.65;
        }
        .curriculum-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-left: 20px;
          color: var(--ink-300);
          font-size: 15px;
          line-height: 1.6;
        }
        .course-detail-cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          max-width: 560px;
          margin: 0 auto;
        }
        .course-detail-cta-inner h2 {
          font-size: clamp(24px, 3.2vw, 32px);
        }
        .course-detail-cta-inner p {
          color: var(--ink-300);
          font-size: 15px;
        }
      `}</style>
    </>
  );
}
