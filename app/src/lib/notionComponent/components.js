import Default from "./Default.svelte";
import Paragraph from "./Paragraph.svelte";
import Column from "./Column.svelte";
import ColumnList from "./ColumnList.svelte";
import Table from "./Table.svelte";
import TableRow from "./TableRow.svelte";
import Heading1 from "./Heading1.svelte";
import Heading2 from "./Heading2.svelte";
import Heading3 from "./Heading3.svelte";
import Toggle from "./Toggle.svelte";
import Image from "./Image.svelte";
import Divider from "./Divider.svelte";
import Callout from "./Callout.svelte";
import BulletedListItem from "./BulletedListItem.svelte";
import Code from "./Code.svelte";
import Quote from "./Quote.svelte";
import NumberedListItem from "./NumberedListItem.svelte";
import Todo from "./Todo.svelte";
import Bookmark from "./Bookmark.svelte";
import Embed from "./Embed.svelte";
import Video from "./Video.svelte";
import LinkPreview from "./LinkPreview.svelte";
import ChildDatabase from "./ChildDatabase.svelte";

export const components = {
    "toggle": Toggle,
    "heading_1": Heading1,
    "heading_2": Heading2,
    "heading_3": Heading3,
    "column_list": ColumnList,
    "column": Column,
    "paragraph": Paragraph,
    "table": Table,
    "table_row": TableRow,
    "image": Image,
    "divider": Divider,
    "callout": Callout,
    "bulleted_list_item": BulletedListItem,
    "numbered_list_item": NumberedListItem,
    "code": Code,
    "quote": Quote,
    "to_do": Todo,
    "bookmark": Bookmark,
    "embed": Embed,
    "video": Video,
    "link_preview": LinkPreview,
    "child_database": ChildDatabase,
}

export function loadComponent(name) {
    if (components[name]) {
        return components[name]
    }
    return Default
}