<template>
  <div>
    <header-item />
    <footer-item />
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem';
import FooterItem from '@/components/FooterItem';

export default {
  name: 'HomeView',
  components: { FooterItem, HeaderItem }
};
</script>
