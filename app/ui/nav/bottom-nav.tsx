import {
    HomeIcon,
    EllipsisVerticalIcon,
  } from '@heroicons/react/24/outline';


export default function BottomNav(){
    return (
        <div className="btm-nav">
            <button>
                <HomeIcon className="size-6 text-blue-500"/>
            </button>

            <button>
            <EllipsisVerticalIcon className="size-6"/>
            </button>
        </div>
    )
}