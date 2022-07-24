import { computed, reactive } from "vue";
import { getAuthor, getCategory, getDate, getTag, } from "vuepress-shared/lib/client";
import { useCategoryMap } from "./categoryMap";
import { useBlogOptions } from "./options";
import { useTagMap } from "./tagMap";
import { useThemeLocaleData } from "@theme-hope/composables";
export const useArticleAuthor = (info) => {
    const themeLocale = useThemeLocaleData();
    return computed(() => {
        const { author } = info.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const useArticleCategory = (info) => {
    const categoryMap = useCategoryMap();
    return computed(() => getCategory(info.value.category).map((name) => ({
        name,
        path: categoryMap.value.map[name].path,
    })));
};
export const useArticleTag = (info) => {
    const tagMap = useTagMap();
    return computed(() => getTag(info.value.tag).map((name) => ({
        name,
        path: tagMap.value.map[name].path,
    })));
};
export const useArticleDate = (info) => computed(() => {
    const { date } = info.value;
    return date ? getDate(date) : null;
});
export const useArticleInfo = (info) => {
    const blogOptions = useBlogOptions();
    const author = useArticleAuthor(info);
    const category = useArticleCategory(info);
    const tag = useArticleTag(info);
    const date = useArticleDate(info);
    const config = reactive({
        author: author.value,
        category: category.value,
        date: date.value,
        localizedDate: info.value.localizedDate || "",
        tag: tag.value,
        isOriginal: info.value.isOriginal || false,
        readingTime: info.value.readingTime || null,
    });
    const items = computed(() => blogOptions.value.articleInfo);
    return { config, items };
};
//# sourceMappingURL=articleInfo.js.map