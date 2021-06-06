<script>
  export let text;
  export let segment;
  export let classes;
  export let linkk;
</script>

<a
  class="{classes} font-heading1"
  aria-current={segment === linkk ? "page" : undefined}
  href={linkk}
  >{text}
</a>
