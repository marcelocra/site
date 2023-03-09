# syntax=docker/dockerfile:1
FROM node:18.12.1

ENV HOME="/root"

ARG shell_rc="${HOME}/.bashrc"


# ------------------------------------------------------------------------------
# - System ---------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Create a reasonably decent prompt line.
RUN echo 'PS1="\$(printf \"=%.0s\" \$(seq 1 \${COLUMNS}))\n[\$(TZ=\"America/Sao_Paulo\" date \"+%F %T\")] [\w]\n# "' >> ${shell_rc}

# Update and install essentials.
RUN apt-get update
RUN apt-get install -y wget git tmux ripgrep curl unzip neovim less

# Download my .tmux.conf.
RUN wget https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf -P ~


# ------------------------------------------------------------------------------
# - Deno -----------------------------------------------------------------------
# ------------------------------------------------------------------------------
# Install and setup.
RUN curl -fsSL https://deno.land/install.sh | sh
ENV DENO_INSTALL="${HOME}/.deno"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"

# ------------------------------------------------------------------------------
# - Setup ----------------------------------------------------------------------
# ------------------------------------------------------------------------------
RUN wget https://raw.githubusercontent.com/marcelocra/dev/main/config-files/.gitconfig -P ~
RUN wget https://raw.githubusercontent.com/marcelocra/dev/main/config-files/.gitconfig.personal.gitconfig -P ~
RUN corepack enable

WORKDIR /workspaces/personal/site

RUN pnpm install

# Stuff is out of order because I don't like losing my Docker cache.
