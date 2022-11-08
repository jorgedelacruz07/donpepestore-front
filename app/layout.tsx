import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-8 md:my-12 md:mx-auto md:max-w-screen-xl min-h-[89vh]">
        {children}
      </body>
    </html>
  );
}
