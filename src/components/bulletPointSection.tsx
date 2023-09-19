
import React, { FC } from "react";


interface BulletPointSectionProps {
    list: string[]
}

const BulletPointSection: FC<BulletPointSectionProps> = ({ list }) => {

    return <ul>
        {list.map((item: string, index: React.Key | null | undefined) => (
				<li key={index}>
					{"->"} {item}
				</li>
			))}
    </ul>


};

export default BulletPointSection;