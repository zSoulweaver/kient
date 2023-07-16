# Endpoints

Find a list of available API Endpoints to consume with Kient here.

<script setup lang="ts">
import { useRouter } from 'vitepress'
import typedocEndpointSidebar from './reference/typedoc-endpoint-sidebar.json'

const router = useRouter()
router.go(typedocEndpointSidebar[0].link.replace(/\.md$/, '.html'))
</script>
