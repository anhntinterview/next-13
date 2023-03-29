import { StaticImport } from "shared/entityType/menu";
import * as React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

export enum TooltipDirection {
    TOP = "top",
    RIGHT = "right",
    LEFT = "left",
    BOTTOM = "bottom",
}

export interface ITooltipItem {
    name: string;
    path?: string;
    icon: string | StaticImport;
}

interface ITooltipProps {
    direction: TooltipDirection;
    data: Array<ITooltipItem>;
}

const TootipTemplate: React.FunctionComponent<ITooltipProps> = (props) => {
    const { direction, data } = props;
    return (
        <div>
            <ul
                className={`${styles.tooltip} ${direction === TooltipDirection.TOP ? styles.top : ""}`}
            >
                {data.map((item) => (
                    <li key={`${item.name}`}>
                        <Image
                            priority
                            src={item.icon}
                            height={16}
                            width={16}
                            alt="_tooltip-icon"
                        />{" "}
                        <Link href={`/${item.path}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TootipTemplate;
