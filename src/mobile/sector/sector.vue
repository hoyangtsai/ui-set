<template>
  <div class="sector">
    <div v-if="title" class="sector__header">
        <div class="sector__header--title">{{ title }}</div>
        <div class="sector__header--right-cont">
            <slot name="header-right-cont"></slot>
        </div>
    </div>
    <div class="sector__body">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'sector',
    props: {
        title: {
            type: String,
            default: '',
        },
    },
    data: function() {
        return {

        }
    },
    mounted: function() {

    },
}
</script>

<style lang="scss" scoped>
.sector {
    background-color: #FFF;
    padding: 1.25rem 2rem 0;
    width: 100%;
    box-sizing: border-box;

    &__header {
        padding: 0.35rem 0 0.8rem;
        display: flex;
        align-items: center;

        &--title {
            font-size: 1.8rem;
            color: #000000;
            line-height: 2.7rem;
            font-weight: 500;
            flex: 1;
        }
    }

    &__body {
        padding-bottom: 2rem;
    }
}
</style>