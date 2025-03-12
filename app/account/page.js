import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div className="p-4">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7 text-center lg:text-left">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
