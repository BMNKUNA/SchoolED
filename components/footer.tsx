import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import Google icon logos for social media

export function Footer() {
  const medicalAids = [
    { name: "Bonitas Medical Aid", icon: "/images/bonitas.png" },
    { name: "Gems Medical Aid", icon: "/images/gems.png" },
    { name: "MedShield", icon: "/images/medshield.png" },
    { name: "Discovery Health", icon: "/images/discovery.png" },
    { name: "Momentum Health", icon: "/images/momentum.png" },
  ];

  const affiliatesSponsors = [
    { name: "Afrocentric Group", logo: "/images/afrocentric.png" },
    { name: "Wits University", logo: "/images/wits.png" },
    { name: "Department of Health", logo: "/images/department-health.png" },
    { name: "Flourish Mom Network", logo: "/images/flourishmom.png" },
    { name: "Hollywood Foundations", logo: "/images/hollywoodbets.png" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Affiliates & Sponsors Section */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-xl font-bold">Our Affiliates & Sponsors</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap bg-gray-900 p-4 rounded-md">
            <div className="ticker-content inline-flex space-x-8 animate-ticker">
              {affiliatesSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex items-center space-x-2">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <span className="text-gray-400 hover:text-white">{sponsor.name}</span>
                </div>
              ))}
              {/* Duplicate the sponsors for seamless scrolling */}
              {affiliatesSponsors.map((sponsor) => (
                <div key={sponsor.name + "_duplicate"} className="flex items-center space-x-2">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <span className="text-gray-400 hover:text-white">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Medical Aids Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Medical Aids</span>
            </div>
            <ul className="space-y-2">
              {medicalAids.map((aid) => (
                <li key={aid.name} className="flex items-center space-x-2">
                  <img
                    src={aid.icon}
                    alt={aid.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <span className="text-gray-400 hover:text-white">{aid.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section with Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Link href="https://www.facebook.com/profile.php?id=100046969886329" passHref>
                  <FaFacebook size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">Facebook</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="#" passHref>
                  <FaTwitter size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">Twitter</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.instagram.com/eluthandweni_maternity_clinic/?hl=en-gb" passHref>
                  <FaInstagram size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="#" passHref>
                  <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">LinkedIn</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/home" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for health tips and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400"
              />
              <Button className="w-full bg-pink-800 hover:bg-pink-700">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eluthandweni Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}