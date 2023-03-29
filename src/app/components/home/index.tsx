import { menuData } from "constant/menu.data";
import { tooltipData } from "constant/tooltip.data";
import MenuTemplate from "template/components/menu.template";
import TooltipTemplate, {
    TooltipDirection,
} from "template/components/tooltip.template";
import * as React from "react";

export interface IMyHomeProps {}

export default function MyHome(props: IMyHomeProps) {
    return (
        <div>
            <TooltipTemplate
                direction={TooltipDirection.TOP}
                data={tooltipData}
            />
            <MenuTemplate data={menuData} />
        </div>
    );
}
