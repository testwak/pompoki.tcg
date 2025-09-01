import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <Avatar>
                    <AvatarImage src="/image/logo.GIF" alt="@pompoki.tcg" />
                    <AvatarFallback> </AvatarFallback>
                </Avatar>
                <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px] font-1">
                    @POMPOKI.tcg
                </span>
            </>
        ),
        transparentMode: "top"
    },
};