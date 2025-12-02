# Jorge Mendieta - Portfolio

Portfolio profesional de Jorge Mendieta, especialista en paisajismo médico.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Pasos para desplegar:

1. **Crea un repositorio en GitHub** (si aún no lo tienes)
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Puedes nombrarlo como quieras (ej: `pagejorge`, `jorge-mendieta-portfolio`)

2. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Habilita GitHub Pages en tu repositorio:**
   - Ve a la pestaña **Settings** de tu repositorio
   - En el menú lateral, busca **Pages**
   - En **Source**, selecciona **GitHub Actions**
   - Guarda los cambios

4. **Configura el basePath (si es necesario):**
   
   Si tu repositorio se llama `username.github.io`, NO necesitas hacer nada más.
   
   Si tu repositorio tiene otro nombre (ej: `pagejorge`), necesitas actualizar `next.config.mjs`:
   - Abre `next.config.mjs`
   - Descomenta y actualiza la línea `basePath` con el nombre de tu repositorio:
   ```javascript
   basePath: '/TU_REPOSITORIO',
   ```

5. **Espera a que se complete el despliegue:**
   - Ve a la pestaña **Actions** de tu repositorio
   - Verás un workflow ejecutándose automáticamente
   - Cuando termine, tu sitio estará disponible en:
     - `https://TU_USUARIO.github.io` (si el repo se llama `TU_USUARIO.github.io`)
     - `https://TU_USUARIO.github.io/TU_REPOSITORIO` (si tiene otro nombre)

### Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para producción

```bash
npm run build
```

El sitio estático se generará en la carpeta `out/`.
