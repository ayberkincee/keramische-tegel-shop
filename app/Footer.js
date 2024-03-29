import logo from "../public/logo.png";
import showroom from "../public/Showroom.jpeg";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="bg-[--primary] dark:bg-red-950  w-full flex flex-col items-center">
        <nav className="xl:w-4/5 flex flex-col md:grid md:grid-cols-5 grid-flow-row auto-rows-max text-slate-50 p-10 relative gap-x-0 md:gap-x-5">
          <Link
            href="/"
            aria-label="Ga terug naar de start pagina van Keramische TegelShop"
            className="bg-white hover:scale-95 absolute left-1/2 transform -translate-x-1/2 -bottom-8 rounded-lg "
          >
            <Image
              src={logo}
              width={250}
              height={100}
              alt="Logo van Keramische Tegel Shop"
              loading="lazy"

            ></Image>
          </Link>
          <span className="col-start-1 row-start-1 text-lg font-bold">
            Pagina
          </span>
          <ul className="col-start-1 row-start-2 flex flex-col">
            <li>
              <Link
                href="/"
                aria-label="Ga naar Home"
                className="hover:underline hover:scale-95"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                aria-label="Ga naar de producten"
                className="hover:underline hover:scale-95"
              >
                Producten
              </Link>
            </li>
            <li>
              <Link
                href="/winkelmand"
                aria-label="Ga naar de winkelmand"
                className="hover:underline hover:scale-95"
              >
                Winkelmand
              </Link>
            </li>
            <li>
              <Link
                href="/klantenservice"
                aria-label="Ga naar de contact-pagina"
                className="hover:underline hover:scale-95"
              >
                Contact
              </Link>
            </li>
          </ul>
          <span className="col-start-2 row-start-1 text-lg font-bold pb-2 hover:underline hover:scale-95">
            <Link href="/shop" aria-label="Ga naar ons assortiment">
              Assortiment
            </Link>
          </span>
          <ul className="col-start-2 row-start-2 flex flex-col">
            <li>
              <Link
                href="/shop?"
                aria-label="Filter op de producten voor keramische tegels huis"
                className="hover:underline hover:scale-95"
              >
                Keramische tegels Huis
              </Link>
            </li>
            <li>
              <Link
                href="/shop?"
                aria-label="Filter op producten voor keramsiche tegels tuin"
                className="hover:underline hover:scale-95"
              >
                Keramische tegels Tuin
              </Link>
            </li>
            <li>
              <Link
                href="/shop?"
                aria-label="Filter op keramische tegels mbi"
                className="hover:underline hover:scale-95"
              >
                Keramische tegels MBI
              </Link>
            </li>
            <li>
              <Link
                href="/shop?"
                aria-label="Filter op keramische tegels Gardenlux"
                className="hover:underline hover:scale-95"
              >
                Keramische tegels GardenLux
              </Link>
            </li>
          </ul>
          <span className="col-start-3 row-start-1 text-lg font-bold hover:scale-95 hover:underline">
            <Link
              href="/klantenservice"
              aria-label="Ga naar de pagina van onze klantenservice"
            >
              Klantenservice
            </Link>
          </span>
          <ul className="col-start-3 row-start-2 flex flex-col">
            <li>
              <Link
                aria-label="Ga naar de contact pagina"
                href="/contact"
                className="hover:underline hover:scale-95"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                aria-label="Ga naar de veelgestelde vragen pagina"
                href="/veelgestelde-vragen"
                className="hover:underline hover:scale-95"
              >
                Veelgestelde vragen
              </Link>
            </li>
            <li>
              <Link
                aria-label="Ga naar de verzending pagina"
                href="/verzending"
                className="hover:underline hover:scale-95"
              >
                Verzending
              </Link>
            </li>
            <li>
              <Link
                aria-label="Ga naar de over ons pagina"
                href="/over-ons"
                className="hover:underline hover:scale-95"
              >
                Over ons
              </Link>
            </li>
          </ul>
          <span className="col-start-4 row-start-1 text-lg font-bold">
            Showroom
          </span>
          <Link
            href="https://maps.app.goo.gl/dfEmEZo1ntC5vVpn8"
            aria-label="Routebeschrijving naar de showroom van Keramische Tegel Shop"
            className="hover:scale-95 col-start-4 row-start-2 rounded-xl"
            target="_blank"
          >
            <Image
              src={showroom}
              width={250}
              height={100}
              alt="Showroom van Keramische Tegel Shop"
              loading="lazy"
              className="rounded-xl"
            ></Image>
          </Link>
          <span className="col-start-5 row-start-1 text-lg font-bold">
            Contact
          </span>
          <ul className="col-start-5 row-start-2">
            <li className="hover:underline hover:scale-95">
              <a
                href="tel:0317765005"
                aria-label="Bellen naar Keramische Tegel Shop"
                className="hover:underline"
              >
                Tel: 0317 765 005
              </a>
            </li>
            <li className="hover:underline hover:scale-95">
              <Link
                href="https://maps.app.goo.gl/dfEmEZo1ntC5vVpn8"
                aria-label="Routebeschrijving naar de showroom van Keramische Tegel Shop"
                className="hover:scale-95 hover:underline"
                target="_blank"
              >
                Adres Showroom: <br aria-hidden="true"></br>Nudepark 93, 6702 DZ
                Wageningen
              </Link>
            </li>
            <li className="hover:underline hover:scale-95">
              <a
                href="email:info@keramischetegelshop.nl"
                aria-label="Stuur een mail"
              >
                Email: info@keramischetegelshop.nl
              </a>
            </li>
          </ul>
        </nav>
        <section className="bg-white dark:bg-black dark:text-slate-100 w-full pt-14 pb-10 items-center text-center">
          <span>
            © Copyright {new Date().getFullYear()} <br aria-hidden="true"></br>{" "}
            Keramische Tegel Shop is onderdeel van{" "}
            <br aria-hidden="true" className="md:hidden"></br>
            <a
              href="https://nudetuin.nl"
              aria-label="Open de website van Nudetuin Sierbestrating & Kunstgras"
              target="_blank"
              className="hover:underline text-[--primary] dark:text-white font-semibold hover:scale-95"
            >
              Nudetuin Sierbestrating & Kunstgras
            </a>{" "}
            <br></br>
            <span className="text-sm">
              Een samenwerking met{" "}
              <a
                href="https://compushare.nl"
                aria-label="Open de website van CompuShare Automatisering"
                target="_blank"
                className="hover:underline text-[--primary] dark:text-white font-semibold hover:scale-90"
              >
                CompuShare Automatiseringsoplossingen
              </a>{" "}
              en{" "}
              <a
                href="https://webchange.nl"
                aria-label="Open de website van WebChange"
                target="_blank"
                className="hover:underline text-[--primary] dark:text-white font-semibold hover:scale-95"
              >
                WebChange
              </a>
            </span>
          </span>
        </section>
      </footer>
    </>
  );
}
