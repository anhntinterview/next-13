import { MenuItem, MenuType } from "shared/entityType/menu";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { IMenuTemplateProps } from "./type";

export function renderMenuItem(itemData: Array<MenuItem>, itemlevel: number) {
    return (
        <ul className={`lv-${itemlevel}`}>
            {itemData.map((item: MenuItem, index) => {
                return (
                    <li key={`${index}-${item}`}>
                        <Image
                            priority
                            src={item.icon}
                            height={16}
                            width={16}
                            alt="_order-menu-icon"
                        />
                        <Link href={`/${item.path}`}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export function callbackMenuItem(
    menuData: { name: string; data: Array<any> } | MenuType,
    itemLevel?: number
) {
    if (Array.isArray(menuData)) {
        return menuData.map((item: any, index) => {
            return (
                <li key={`${index}-${item.name}`}>
                    <Image
                        priority
                        src={item.icon}
                        height={16}
                        width={16}
                        alt="_order-menu-icon"
                    />
                    <label htmlFor={`_${item.name}`}>{item.name}</label>
                    {item.data &&
                        (item.data.filter((item: any) => item.data).length === 0
                            ? renderMenuItem(item.data, item.level)
                            : callbackMenuItem(item, item.level))}
                </li>
            );
        });
    } else {
        return menuData.data.map((item: any, index) => {
            return (
                <ul className={`lv-${itemLevel}`} key={`${item.name}`}>
                    <li>
                        <Image
                            priority
                            src={item.icon}
                            height={16}
                            width={16}
                            alt="_order-menu-icon"
                        />
                        <label htmlFor={`_${item.name}`}>{item.name}</label>
                        {item.data &&
                            (item.data.filter((item: any) => item.data)
                                .length === 0
                                ? renderMenuItem(item.data, item.level)
                                : callbackMenuItem(item, item.level))}
                    </li>
                </ul>
            );
        });
    }
}

export default function MenuTemplate(props: IMenuTemplateProps) {
    const { data } = props;
    return (
        <div>
            <ul className="lv-root">{callbackMenuItem(data)}</ul>
        </div>
    );
}
