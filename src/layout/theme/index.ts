/**
 * @description ⚠️：此文件仅供主题插件使用，请不要在此文件中导出别的工具函数（仅在页面加载前运行）
 */

import type { multipleScopeVarsOptions } from "@pureadmin/theme";

/** 预设主题色 */
const themeColors = {
  /* 亮白色 */
  light: {
    subMenuActiveText: "#1677ff",
    menuBg: "#fff",
    menuHover: "#f6f6f6",
    subMenuBg: "#fff",
    subMenuActiveBg: "#f6f6f6",
    menuText: "#333",
    sidebarLogo: "#fff",
    menuTitleHover: "#1677ff",
    menuActiveBefore: "#1677ff"
  },
  /* 道奇蓝 */
  default: {
    subMenuActiveText: "#fff",
    menuBg: "#001529",
    menuHover: "rgb(64 145 247 / 15%)",
    subMenuBg: "#000c17",
    subMenuActiveBg: "#1677ff",
    menuText: "rgb(254 254 254 / 75%)",
    sidebarLogo: "#001529",
    menuTitleHover: "#fff",
    menuActiveBefore: "#1677ff"
  }
};

/**
 * @description 将预设主题色处理成主题插件所需格式
 */
export const genScssMultipleScopeVars = (): multipleScopeVarsOptions[] => {
  const result = [] as multipleScopeVarsOptions[];
  Object.keys(themeColors).forEach(key => {
    result.push({
      scopeName: `layout-theme-${key}`,
      varsContent: `
        $subMenuActiveText: ${themeColors[key].subMenuActiveText} !default;
        $menuBg: ${themeColors[key].menuBg} !default;
        $menuHover: ${themeColors[key].menuHover} !default;
        $subMenuBg: ${themeColors[key].subMenuBg} !default;
        $subMenuActiveBg: ${themeColors[key].subMenuActiveBg} !default;
        $menuText: ${themeColors[key].menuText} !default;
        $sidebarLogo: ${themeColors[key].sidebarLogo} !default;
        $menuTitleHover: ${themeColors[key].menuTitleHover} !default;
        $menuActiveBefore: ${themeColors[key].menuActiveBefore} !default;
      `
    } as multipleScopeVarsOptions);
  });
  return result;
};
