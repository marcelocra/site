# syntax=docker/dockerfile:1
FROM node:16.17.1

ENV HOME="/root"

ARG shell_rc="${HOME}/.bashrc"


# ------------------------------------------------------------------------------
# - System ---------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Create a reasonably decent prompt line.
RUN echo 'PS1="\$(printf \"=%.0s\" \$(seq 1 \${COLUMNS}))\n[\$(TZ=\"America/Sao_Paulo\" date \"+%F %T\")] [\w]\n# "' >> ${shell_rc}

# Update and install essentials.
RUN apt-get update
RUN apt-get install -y wget git tmux ripgrep curl unzip neovim

# Download my .tmux.conf.
RUN wget https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf -P ~

WORKDIR ${HOME}

RUN corepack enable
