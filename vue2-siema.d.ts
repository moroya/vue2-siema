declare module 'vue2-siema' {
    import Vue, {PluginObject} from 'vue';

    const SiemaPlugin: PluginObject<{}>;
    export default SiemaPlugin;
    export const Siema: Vue;
}
