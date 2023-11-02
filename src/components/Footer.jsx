export default function Footer({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      {children}
      <span>Copyright ©{currentYear}</span>
    </footer>
  );
}
