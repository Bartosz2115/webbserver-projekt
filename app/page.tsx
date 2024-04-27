import { galada } from "./fonts";

export default function Home() {
  return (
  <article>
    <h2 className={`${galada.className} text-sky-300 text-4xl font-light`}>New way to save your <span className='text-sky-200 font-bold'>notes</span> online.</h2>
    <div className="w-1/2">
      <p className="text-sky-100 text-lg ml-10 mt-4">
        Unlock the power of seamless note-taking with NotesApp. Capture ideas on-the-go, organize thoughts effortlessly, and access your notes from any device. Experience streamlined productivity with intuitive features designed to elevate your workflow. Join us and simplify your life, one note at a time.
      </p> 
    </div>
  </article>
  );
}
