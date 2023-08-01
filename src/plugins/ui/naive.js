import {
    create,
    NButton,
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLoadingBarProvider,
    NMessageProvider,
    NNotificationProvider,
    NSpace,
    NIcon,
    NLayoutSider,
    NLayoutContent,
    NLayoutFooter,
    NGridItem,
    NGrid,
    NCard,
    NScrollbar, NMenu,NRow, NStatistic,NBreadcrumb, NBreadcrumbItem, NAvatar, NDropdown, NBadge, NTooltip, NGlobalStyle
} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NConfigProvider,
        NNotificationProvider,
        NMessageProvider,
        NLoadingBarProvider,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        NLayoutContent,
        NLayoutFooter,
        NSpace,
        NIcon,
        NGrid,
        NGridItem,
        NCard,
        NScrollbar,
        NMenu,
        NRow,
        NStatistic,
        NBreadcrumb,
        NBreadcrumbItem,
        NAvatar,
        NDropdown,
        NBadge,
        NTooltip,
        NGlobalStyle
    ]
})

export function setupNaive(app) {
    app.use(naive)
}