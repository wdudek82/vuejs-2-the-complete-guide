<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <server v-for="server in servers" :key="server.name" :server="server" />
      </ul>
    </div>
    <server-details />
  </div>
</template>

<script>
import Server from './Server';
import ServerDetails from './ServerDetails';
import { eventBus } from '../../main';

export default {
  name: 'Servers',
  components: {
    Server,
    ServerDetails,
  },
  data() {
    return {
      servers: [
        { id: 1, name: 'pasvlc601', status: 'active' },
        { id: 2, name: 'pasvlc602', status: 'active' },
        { id: 3, name: 'pasvlc603', status: 'active' },
        { id: 4, name: 'pasvlc604', status: 'active' },
      ],
    };
  },
  created() {
    eventBus.$on('changeServerStatus', ({ serverId, status }) => {
      this.servers.map((server) => {
        const updServer = server;

        if (updServer.id === serverId) {
          updServer.status = status;
        }

        return updServer;
      });
    });
  },
};
</script>

<style scoped></style>
