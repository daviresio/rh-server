#!/usr/bin/env bash
sleep 30 && ./node_modules/.bin/sequelize db:migrate && ./node_mod ules/.bin/sequelize db:seed:all && npm run dev;