import {SvgIconComponent} from "@mui/icons-material";

export type ResumeTileProps = {
    icon: SvgIconComponent;
    title: string;
    items: ResumeItemProps[];
};
export type ResumeTitleProps = {
    icon: SvgIconComponent;
    title: string;
};

export type ResumeItemProps = {
    year: string;
    title: string;
    location: string;
};
