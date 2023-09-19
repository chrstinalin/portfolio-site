
import React, { FC } from "react";


interface BulletPointSectionProps {
    list: string[]
}

const BulletPointSection: FC<BulletPointSectionProps> = ({ list }) => {

    return <ul>
        {list.map((item: string, index: React.Key | null | undefined) => (
				<li key={index} className={"flex text-left"}>
                    <div className={"w-6 h-fit mr-4"}>{"->"}</div>
                    <div className={"w-64 h-fit mr-4"}>{item}</div>
				</li>
			))}
    </ul>


};

export default BulletPointSection;