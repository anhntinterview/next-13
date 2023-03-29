import { MenuType } from "shared/entityType/menu";
import { SVGIcon } from "template/components/svg.template";

export const menuData: MenuType = [
    {
        name: "Home",
        level: 0,
        path: "home",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "About Us",
        level: 0,
        path: "about",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "Released Product",
        level: 0,
        path: "released",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "Mission * Value",
        level: 0,
        path: "",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "Insight",
        level: 0,
        path: "",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "Our Teaser website",
        level: 0,
        path: "",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "Contact",
        level: 0,
        path: "",
        icon: SVGIcon.ChevronRightIcon,
    },
    {
        name: "X",
        level: 0,
        path: "x",
        icon: SVGIcon.ChevronRightIcon,
        data: [
            {
                name: "Y",
                level: 1,
                path: "y",
                icon: SVGIcon.ChevronRightIcon,
                data: [
                    {
                        name: "Z",
                        level: 2,
                        path: "z",
                        icon: SVGIcon.ChevronRightIcon,
                        data: [
                            {
                                name: "A",
                                level: 1,
                                path: "a",
                                icon: SVGIcon.ChevronRightIcon,
                            },
                            {
                                name: "B",
                                level: 1,
                                path: "b",
                                icon: SVGIcon.ChevronRightIcon,
                            },
                            {
                                name: "C",
                                level: 1,
                                path: "c",
                                icon: SVGIcon.ChevronRightIcon,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Business Package",
        level: 0,
        path: "",
        icon: SVGIcon.ChevronRightIcon,
        data: [
            {
                name: "Basic",
                level: 1,
                path: "basic",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "Advance",
                level: 1,
                path: "advance",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "WordPress",
                icon: SVGIcon.ChevronRightIcon,
                level: 1,
                path: "wordpress",
            },
            {
                name: "Business To Business",
                level: 1,
                path: "b2b",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "Business To Company",
                level: 1,
                path: "b2c",
                icon: SVGIcon.ChevronRightIcon,
            },
        ],
    },
    {
        name: "Service",
        level: 0,
        path: "",
        icon: SVGIcon.ChevronRightIcon,
        data: [
            {
                name: "E-Commercial",
                level: 1,
                path: "e-commercial",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "Promotion",
                level: 1,
                path: "promotion",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "Event",
                level: 1,
                path: "event",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "Internal Business",
                level: 1,
                path: "internal-business",
                icon: SVGIcon.ChevronRightIcon,
            },
            {
                name: "Enterprise",
                level: 1,
                path: "enterprise",
                icon: SVGIcon.ChevronRightIcon,
            },
        ],
    },
];
