import JDIcon from '../../public/assets/JDIcon.svg';
import Image from 'next/image'
export default function Divider() {
    return (
        <div className="relative">
            <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
            >
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-gray-100 px-2 text-gray-500">
                    <Image
                        src={JDIcon}
                        alt="J&D Pest Control Icon"
                        aria-hidden="true"
                        className="size-10 text-gray-500"
                    />
                </span>
            </div>
        </div>
    )
}
