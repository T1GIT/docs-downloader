<script lang="ts" setup>
import DocumentList from '@/documents/components/DocumentList.vue'
import DocumentView from '@/documents/components/DocumentView.vue'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="title">
        MyApp
      </div>
      <div class="user">
        Username
      </div>
    </header>

    <div class="body">
      <div class="list">
        <DocumentList class="documents-list" />
      </div>
      <div class="view">
        <DocumentView class="document-view" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'shared/styles/constants';

.app {
  padding: 41px 50px 58px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: constants.$color-surface-1;

  .header  {
    margin-bottom: 35px;
    display: flex;
    align-items: center;

    .title {
      font-size: constants.$font-size-h2;
      font-weight: 700;
    }

    .user {
      margin-left: auto;
    }
  }

  .body {
    flex: 1;
    border-radius: constants.$effect-border-radius;
    overflow: hidden;
    box-shadow: constants.$effect-box-shadow;
    display: flex;

    .list {
      width: 282px;
      padding: 27px 0 0 0;
      background: constants.$color-surface-1;

      .document-list {
        height: 100%;
      }
    }

    .view {
      flex: 1;
      display: flex;
      border-left: constants.$effect-border;
      background: constants.$color-surface-2;

      .document-view {
        flex: 1;
      }
    }
  }
}
</style>

<style lang="scss">
@use "shared/styles/constants";

@import 'core/styles/typography';
@import 'core/styles/globals';

#app {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: constants.$font-size-text;
}
</style>
