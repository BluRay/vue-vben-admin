<template>
  <div>
    <vxe-table
      ref="xTable"
      border
      stripe
      resizable
      size="mini"
      align="center"
      :loading="loading"
      :height="tableheight"
      :data="tableData.data"
    >
      <vxe-table-column type="seq" title="序号" fixed="left" width="45px" />
      <vxe-table-column field="USERNAME" title="工号" fixed="left" width="75px" />
      <vxe-table-column field="USERNAME" title="姓名" fixed="left" width="65px" />
      <vxe-table-column field="ADDRESS" title="内容" fixed="left" />
    </vxe-table>
    <vxe-pager
      border
      :loading="loading"
      :current-page="tableData.pageIndex"
      :page-size="tableData.pageSize"
      :total="tableData.totalCount"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script lang="ts">
  import 'xe-utils';
  import VXETable from 'vxe-table';
  import 'vxe-table/lib/style.css';
  export default {
    name: 'DeptManagement',
    components: { VXETable },
    props: {
      title: String,
    },
    setup(props) {
      console.log(props.title);
    },
    data() {
      return {
        showModel: false,
        loading: false,
        tableheight: '500px',
        tableData: {},
      };
    },
  };
</script>
