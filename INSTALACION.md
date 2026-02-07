# 🚀 Guía de Instalación Rápida

## 📱 Versión Móvil (alora-mobile)

### Instalación
```bash
cd alora-mobile
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

### Construir para producción
```bash
npm run build
```

---

## 💻 Versión Desktop (alora-desktop)

### Instalación
```bash
cd alora-desktop
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

---

## ✅ Verificación

Ambas versiones deberían abrir en:
- **Local**: http://localhost:5173
- **Network**: http://[tu-ip]:5173

---

## 📱 Para probar la versión móvil:

### Opción 1: DevTools
1. Abre Chrome DevTools (F12)
2. Click en el ícono de dispositivo móvil (Ctrl+Shift+M)
3. Selecciona un dispositivo (iPhone, Samsung, etc.)

### Opción 2: En tu teléfono
1. Asegúrate de estar en la misma red WiFi
2. Ejecuta `npm run dev`
3. Busca la URL de Network (ej: http://192.168.1.x:5173)
4. Abre esa URL en tu teléfono

---

## 🔧 Solución de Problemas

### Si `npm install` falla:
```bash
# Limpia el cache
npm cache clean --force

# Intenta de nuevo
npm install
```

### Si el puerto 5173 está ocupado:
```bash
# Vite usará automáticamente el siguiente puerto disponible
# O puedes especificar uno diferente en vite.config.js
```

---

## 📊 Diferencias Clave

| Aspecto | Desktop | Móvil |
|---------|---------|-------|
| Navbar | 80px, links visibles | 60px, menú hamburguesa |
| Grid | 3-4 columnas | 1-2 columnas |
| Padding | Amplio (100px) | Compacto (60px) |
| Animaciones | Completas (0.4s) | Ligeras (0.3s) |
| Botones | Hover effects | Touch effects |

---

## 🎯 Próximos Pasos

1. ✅ Instalar dependencias en ambas versiones
2. ✅ Probar en navegador
3. ✅ Probar en dispositivo móvil real
4. 📝 Comparar rendimiento
5. 🎨 Ajustar según preferencias

---

**¡Listo para usar!** 🎉
