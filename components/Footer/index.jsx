import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white mt-24">
        <div className="px-6 bg-dark-blue-50">
        <div className="max-w-362 mx-auto grid grid-cols-3 pt-[56px] pb-[60px] border-b border-gray-600">
            <div className="flex">
                <div className="pt-[5px] pr-[16px]">
                    <Image width={54} height={25} src="/app/logo.svg" alt="Logo" className="h-fit" />
                </div>
                <div>
                    <div>
                        <p>Tehnical University of Munich</p>
                        <p>Arcisstraße 21</p>
                        <p>80333 München</p>
                    </div>
                    <div className="mt-5">
                    <p>Phone: <Link href="#" className="hover:underline">+49 (0)89-289-01</Link></p>
                    <p>Fax: <Link href="#" className="hover:underline">+49 (0)89-289-01</Link></p>
                    </div>
                </div>
            </div>

            <div>
                <h6 className="font-bold">Let&apos;s shape the future together.</h6>
                <Link href="#" className="flex mt-3 gap-x-3">
                    <span className="hover:underline">Support us</span>
                    <Image src="/icons/pen.svg" height={20} width={20} alt="Icon" />
                </Link>
            </div>

            <div>
                <h6 className="font-bold">Latest news</h6>
                <ul className="mt-3 space-y-4">
                    <li className="flex gap-x-3">
                        <Image height={20} width={20} src="/icons/arrow.svg" alt="Icon" />
                        <Link href="#">Germany`&apos;`s strongest university in business sciences</Link>
                    </li>
                    <li className="flex gap-x-3">
                        <Image height={20} width={20} src="/icons/arrow.svg" alt="Icon" />
                        <Link href="#">TUM partners with Nobel Sustainability Trust</Link>
                    </li>
                    <li className="flex gap-x-3">
                        <Image height={20} width={20} src="/icons/arrow.svg" alt="Icon" />
                        <Link href="#">Antihelium nuclei as messengers from the depths of the galaxy</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className="bg-dark-blue-50">
        <div className="py-8 space-y-4 px-6 max-w-362 mx-auto">
            <div className="flex">
                <h6>Schools and Departments:</h6>
                <ul className="flex flex-wrap w-full gap-x-3">
                    <li className="flex hover:underline">
                        <span>Computation, Information and Technology</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span className="w-full">Engineering and Design</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Natural Sciences</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Life Sciences</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Management</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Social Sciences and Technology </span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Medicine</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Sport and Health Sciences </span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                </ul>
            </div>
            <div className="flex">
                <h6 className="pr-20">Quicklinks:</h6>
                <ul className="flex flex-wrap w-full gap-x-3">
                    <li className="flex hover:underline">
                        <span>Persons (TUMonline) </span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span className="w-full">IT Services</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Calendar</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>MyTUM</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Rooms (TUMonline)</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>University Library</span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>TUMshop </span>
                        <Image src="/icons/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className="bg-dark-blue">
        <div className="max-w-362 mx-auto py-6 px-6">
            <div className="flex justify-between">
                <ul className="flex gap-[1.25rem]">
                    <li className="hover:underline">Jobs</li>
                    <li className="hover:underline">Feedback</li>
                    <li className="hover:underline">Press and Media</li>
                    <li className="hover:underline">Accessibility</li>
                    <li className="hover:underline">Privacy Policy</li>
                    <li className="hover:underline">Legal Notice</li>
                </ul>
                <ul className="flex gap-[1.5rem]">
                    <Image width={20} height={20} src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-facebook.svg" alt="Social" />
                    <Image width={20} height={20} src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-youtube.svg" alt="Social" />
                    <Image width={20} height={20} src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-twitter.svg" alt="Social" />
                    <Image width={20} height={20} src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-instagram.svg" alt="Social" />
                    <Image width={20} height={20} src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-linkedin.svg" alt="Social" />
                    <Image width={20} height={20} src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/rss.svg" alt="Social" />
                </ul>
            </div>
            <div className="flex items-center pt-6 space-x-3">
                <div className="pr-3">
                    <Image src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/partners-of-excellence.svg" width={32} height={60} alt="Logo"  />
                </div>
                <div className="hover:underline">
                    <p>TUM Partners of Excellence</p>
                    <p className="pt-6 text-xs">Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen · Wacker Chemie</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer